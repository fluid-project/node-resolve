var test = require('../lib/test-utils');
var resolve = require('../');

test('nonstring', function (t) {
    t.plan(1);
    resolve(555, function (err, res, pkg) {
        t.ok(err);
    });
});
