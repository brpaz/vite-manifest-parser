import { ManifestParser } from './index';
import * as path from 'path';

const manifestPath = path.join(__dirname, '..', 'test', 'resources', 'manifest.json');

describe('ViteParser', () => {
  it('parses the provided manifest file', () => {
    const parser = new ManifestParser(manifestPath);
    const manifest = parser.getManifest();
    expect(Object.keys(manifest).length).toBe(2);
    expect(Object.keys(manifest)).toContain('src/assets/main.js');
  });

  it('throws error on not existing manifest file', () => {
    expect(() => {
      const parser = new ManifestParser('xpto');
    }).toThrow();
  });

  it('returns scripts files', () => {
    const parser = new ManifestParser(manifestPath);
    expect(parser.getScript('src/assets/main.js')).toBe('assets/main.2d87e327.js');
  });

  it('throws error for not existing chunk', () => {
    expect(() => {
      const parser = new ManifestParser(manifestPath);
      parser.getScript('xpto');
    }).toThrow();
  });

  it('throws error when requesting non entry chunk', () => {
    expect(() => {
      const parser = new ManifestParser(manifestPath);
      parser.getScript('_vendor.d1356a91.js');
    }).toThrow();
  });

  it('returns CSS files', () => {
    const parser = new ManifestParser(manifestPath);

    const cssFiles = parser.getCss('src/assets/main.js');
    expect(cssFiles.length).toBe(1);
    expect(cssFiles[0]).toBe('assets/main.402e9001.css');
  });

  it('returns imported files', () => {
    const parser = new ManifestParser(manifestPath);

    const imports = parser.getImports('src/assets/main.js');
    expect(imports.length).toBe(1);
    expect(imports[0]).toBe('assets/vendor.d1356a91.js');
  });
});
