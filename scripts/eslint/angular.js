module.exports = {
    overrides: [
        {
            files: ['*.component.ts', '*.service.ts', '*.directive.ts', '*.module.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@angular-eslint/eslint-plugin'],
            rules: {
                '@angular-eslint/component-class-suffix': 'error',
                '@angular-eslint/component-selector': 'error',
                '@angular-eslint/contextual-decorator': 'error',
                '@angular-eslint/contextual-lifecycle': 'error',
                '@angular-eslint/directive-class-suffix': 'error',
                '@angular-eslint/directive-selector': 'error',
                '@angular-eslint/no-attribute-decorator': 'error',
                '@angular-eslint/no-conflicting-lifecycle': 'error',
                '@angular-eslint/no-empty-lifecycle-method': 'error',
                '@angular-eslint/no-input-prefix': 'error',
                '@angular-eslint/no-output-native': 'error',
                '@angular-eslint/no-output-on-prefix': 'error',
                '@angular-eslint/no-pipe-impure': 'error',
                '@angular-eslint/no-queries-metadata-property': 'error',
                '@angular-eslint/pipe-prefix': 'error',
                '@angular-eslint/prefer-on-push-component-change-detection': 'error',
                '@angular-eslint/prefer-output-readonly': 'error',
                '@angular-eslint/relative-url-prefix': 'error',
                '@angular-eslint/use-component-selector': 'error',
                '@angular-eslint/use-lifecycle-interface': 'error',
                '@angular-eslint/use-pipe-transform-interface': 'error',
                '@angular-eslint/no-lifecycle-call': 'error',
                '@angular-eslint/component-max-inline-declarations': 'error',
                // Off
                '@angular-eslint/no-host-metadata-property': 'off',
                '@angular-eslint/use-component-view-encapsulation': 'off',
                '@angular-eslint/use-injectable-provided-in': 'off',
                '@angular-eslint/no-inputs-metadata-property': 'off',
                '@angular-eslint/no-outputs-metadata-property': 'off',
                '@angular-eslint/sort-ngmodule-metadata-arrays': 'off',
                '@angular-eslint/no-output-rename': 'off',
                '@angular-eslint/no-input-rename': 'off',
                '@angular-eslint/no-forward-ref': 'off',
            },
        },
    ],
};