var remarkrc = {
    settings: {
        bullet: '-',
        commonmark: true,
        emphasis: '_',
        fence: '`',
        incrementListMarker: true,
        listItemIndent: 1,
        strong: '*'
    },
    plugins: [
        ["frontmatter"],
        ["lint-fenced-code-flag"],
        ["lint-no-shell-dollars"],
        ["remark-preset-lint-recommended"]
    ]
};

module.exports = remarkrc;