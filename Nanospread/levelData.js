var levelData = [
    [  1,  3,  8, 10, 10, 10,  0, 40, 40, 40,  0,800,  0, 80,100, 60, 60],
    [  1,  5,  8,  0,  0, 10,  0, 40, 40, 40,  0,800,  0, 60,  0, 50, 50],
    [  1,  7,  8,  0,  0, 10,  0, 30,  0, 90, 90, 70, 50, 40,100, 40, 40],
    [ 15,  0,  0, 18, 18, 18,  0, 30,  0, 90, 90, 90,  0, 40,  0, 40, 40],
    [ 14,  0,  0, 18, 18, 18,  0, 30,  0, 90, 90, 90,  0, 40,100, 30, 30],
    [ 13, 13, 13, 18, 18, 18, 20, 20,  0, 90, 90, 90,  0, 40,  0, 30, 30],
    [  0,  0,  0,  0,  0,  0, 20, 20,  0,  0,  0,  0,  0, 40,  0, 30, 30],
    [  0, 40, 40, 40, 30, 30, 20, 20, 23, 24, 25, 26, 27, 28, 29, 30, 30],
    [  0, 40, 40,  0, 30, 30,  0,  0,  0,  0,900,  0,  0,  0,  0,900,  0],
    [  0, 40, 40,  0, 30, 30, 30, 40, 40, 40, 40, 40, 40, 40, 40, 70, 70],
    [ 50,400,  0,  0, 30, 30, 30,  0,  0,  0,900,  0,  0,  0,  0, 70, 70],
    [ 50, 50, 50,900, 30, 30, 30, 60, 60, 60, 60, 60, 60, 60, 60, 70, 70],
    [ 50, 50, 50,  0,  0, 30, 30,  0,  0,  0,900,  0,  0,  0,  0, 90, 90],
    [ 50, 50, 50,  0,  0, 30, 30, 70, 70, 70, 70, 70, 70, 70, 70, 90, 90],
    [ 70, 70, 70,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,110,110],
    [ 90, 90, 90,  0,999,800,600,400,300,200,190,160,151,133,130,110, 20],
    [110,110,110,  0,999,800,600,400,300,300,  0,190,160,152,134,131, 20],
    [130,130,130,  0,999,900,700,500,300,300,  0,  0,190,160,153,135, 20],
    [150,150,150,  0,999,900,700,500,300,300,  0,  0,  0,190,160,154, 20]
];


// [ 1,  3,  8, 10, 10, 10,  0,  0,  0,  0],
//     [ 1,  5,  8,  0,  0,  0, 10,  0,  0,  0],
//     [ 1,  7,  8,  0,  0,  0, 10,  0,  0,  0],
//     [15,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [14,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [13, 13, 13,  0,  0,  0,  0,  0,  0,  0],
//     [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
//     [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0]

// [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
// [1, 1, 1, 0, 0, 0, 7, 7, 8, 0],
// [1, 1, 1, 2, 2, 0, 7, 7, 8, 10],
// [0, 0, 0, 0, 2, 0, 7, 7, 0, 11],
// [2, 2, 2, 2, 2, 0, 7, 7, 13, 12],
// [2, 2, 2, 0, 0, 5, 5, 5, 14, 0],
// [2, 2, 2, 0, 0, 5, 5, 5, 15, 16],
// [3, 0, 0, 3, 3, 3, 0, 0, 0, 17],
// [3, 3, 3, 3, 3, 3, 0, 17, 17, 17],
// [3, 3, 3, 3, 3, 3, 0, 17, 17, 17]

// [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]



// [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]