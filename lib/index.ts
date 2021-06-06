import * as fs from 'fs';

interface Chunk {
  file: string;
  src: string;
  isEntry: boolean;
  imports: Array<string>;
  css: Array<string>;
}

interface Manifest {
  [key: string]: Chunk;
}

export class ManifestParser {
  manifest: Manifest;

  constructor(manifestPath: string) {
    const rawData = fs.readFileSync(manifestPath);
    this.manifest = JSON.parse(rawData.toString());
  }

  /**
   * Returns the chunk information for the file passed as argument.
   */
  private getChunk(path: string): Chunk {
    const chunk = this.manifest[path];

    if (!chunk) {
      throw new Error(`The assset ${path} was not found in the manifest file`);
    }

    return chunk;
  }

  getManifest(): Manifest {
    return this.manifest;
  }

  /**
   * Returns the final asset path for the js file with the path passed as argument
   */
  getScript(path: string): string {
    const chunk = this.getChunk(path);

    if (!chunk.isEntry) {
      throw new Error(`The assset ${path} is not an entry`);
    }

    return chunk.file;
  }

  getCss(path: string): Array<string> {
    const chunk = this.getChunk(path);

    return chunk.css;
  }

  getImports(path: string): Array<string> {
    const imports = new Array<string>();
    const chunk = this.getChunk(path);

    if (chunk.imports.length > 0) {
      for (const importFile of chunk.imports) {
        imports.push(this.manifest[importFile].file);
      }
    }

    return imports;
  }
}
