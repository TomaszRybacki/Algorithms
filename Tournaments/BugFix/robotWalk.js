function robotWalk(a) {
    var minX = 0;
    var minY = -1;
    var maxX = Infinity;
    var maxY = Infinity;

    var x = 0;
    var y = 0;

    for (var i = 0; i < a.length; i++) {
        switch (i % 4) {

        case 0:
            y += a[i];
            if (y >= maxY) {
                return true;
            }
            maxY = y;
            break;

        case 1:
            x += a[i];
            if (x >= maxX) {
                return true;
            }
            maxX = x;
            break;

        case 2:
            y -= a[i];
            if (y <= minY) {
                return true;
            }
            minY = y;
            break;

        case 3:
            x -= a[i];
            if (x < minX) { // x <= minX
                return true;
            }
            minX = x;
            break;
        }
    }

    return false;
}
