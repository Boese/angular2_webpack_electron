module.exports = function (grunt) {
    grunt.initConfig({
        'create-windows-installer': {
            ia32: {
                appDirectory: './app/App',
                outputDirectory: './prod',
                name: 'App',
                description: '',
                authors: 'Chris Boese',
                exe: 'App.exe',
                title: 'App',
                noMsi: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-electron-installer');
};