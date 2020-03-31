module.exports = {
    verifyConditions: [
        '@semantic-release/changelog',
        '@semantic-release/github',
        '@semantic-release/git',
    ],
    prepare: [
        '@semantic-release/npm',
        '@semantic-release/changelog',
        {
            path: '@semantic-release/git',
            assets: ['CHANGELOG.md', 'package.json'],
            message: 'chore(release): ${nextRelease.version}\n\n${nextRelease.notes} [ci skip]',
        },
    ],
    publish: ['@semantic-release/github'],
    npmPublish: false
};