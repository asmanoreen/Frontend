System.config({
    paths: {
      'npm:': '/node_modules/'
    },
    map: {
      app: 'dist/app',
      'core-js': 'npm:core-js',
      'zone.js': 'npm:zone.js',
      'rxjs': 'npm:rxjs',
      '@ng-bootstrap/ng-bootstrap': 'node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js'
    },
    packages: {}
  });