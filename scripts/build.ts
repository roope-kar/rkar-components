import path from 'path';
import esbuild from 'esbuild';

esbuild.build({
    entryPoints: ['source/index.js'],
    bundle: true,
    minify: true,
    target: 'es6',
    sourcemap: false,
    format: 'esm',
    loader: {
        '.html': 'text',
        '.css': 'text'
    },
    outdir: 'lib',
    plugins: [
        {
            name: 'alias',
            setup(build) {
                build.onResolve({ filter: /^src/ }, args => {
                    return {
                        path: path.resolve(__dirname, '..', args.path)
                    };
                });
            }
        }
    ]
}).catch(() => process.exit(1));
