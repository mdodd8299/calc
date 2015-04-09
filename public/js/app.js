function add(a, b, c) {
    var $answer;

    if (a === 0) {
        $answer = Math.sqrt(Math.pow(c, 2)-Math.pow(b, 2))
    }
    else if (b === 0) {
        $answer = Math.sqrt(Math.pow(c, 2)-Math.pow(b, 2))
    }
    else if (c === 0) {
        $answer = Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2))
    }
    else {
        $answer = Nope
    }
    return($answer)
}

function quad(a, b, c) {
    var $answer1;
    var $answer2;
    var $array =[]

    $answer1 = ((b * -1) + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)
    $answer2 = ((b * -1) - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)

    $array.push($answer1)
    $array.push($answer2)

    console.log($array)

    return($array)
}

function fac(a) {
    var $multi = a;

    for (var i = 1; i < a; i += 1) {
        $multi *= i
    }

    return($multi)
}

$('.submit').click(function() {
    var a = parseInt($('#aValue').val());
    var b = parseInt($('#bValue').val());
    var c = parseInt($('#cValue').val());
    $('.result').html(add(a, b, c));
});

$('.submit2').click(function() {
    var a = parseInt($('#aValue2').val());
    var b = parseInt($('#bValue2').val());
    var c = parseInt($('#cValue2').val());
    console.log(quad(a, b, c));
    console.log(a)
    console.log(b)
    console.log(c)
    $('.result2').html(quad(a, b, c).join("    and    "));
});

$('.submit3').click(function() {
    var a = parseInt($('#input').val());
    $('.result3').html(fac(a));
});