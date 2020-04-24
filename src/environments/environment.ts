// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  job: 'http://localhost:5000/api/v1/jobs',
  mock_data: [{
    point: '1801',
    position: {
      x: -0.70454,
      y: -2.72520,
      z: 0
    }, orientation: {
      x: 0,
      y: 0,
      z: -0.70232,
      w: 0.708880
    }
  }, {
    point: '1802',
    position: {
      x: 0.51862,
      y: 1.48194,
      z: 0
    }, orientation: {
      x: 0,
      y: 0,
      z: 0.09697,
      w: 0.99528
    }
  }, {
    point: '1815',
    position: {
      x: 0,
      y: -2,
      z: 0
    }, orientation: {
      x: 0,
      y: 0,
      z: 0,
      w: 1
    }
  }]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
