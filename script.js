let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 150) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

}

function chest_1() {
    if (document.getElementById('chest_container').style.display == 'none') {
        document.getElementById('chest_container').style.display = 'inline-block';
    }

    if (document.getElementById('chest_1').style.display == 'none') {
        document.getElementById('chest_1').style.display = 'block';
        document.getElementById('chest_1').style.opacity = '1';
    } else {
        document.getElementById('chest_1').style.display = 'none';
        document.getElementById('chest_1').style.opacity = '0';
    }
}

function chest_2() {
    if (document.getElementById('chest_container').style.display == 'none') {
        document.getElementById('chest_container').style.display = 'inline-block';
    }

    if (document.getElementById('chest_2').style.display == 'none') {
        document.getElementById('chest_2').style.display = 'block';
        document.getElementById('chest_2').style.opacity = '1';
    } else {
        document.getElementById('chest_2').style.display = 'none';
        document.getElementById('chest_2').style.opacity = '0';
    }
}

function chest_3() {
    if (document.getElementById('chest_container').style.display == 'none') {
        document.getElementById('chest_container').style.display = 'inline-block';
    }

    if (document.getElementById('chest_3').style.display == 'none') {
        document.getElementById('chest_3').style.display = 'block';
        document.getElementById('chest_3').style.opacity = '1';
    } else {
        document.getElementById('chest_3').style.display = 'none';
        document.getElementById('chest_3').style.opacity = '0';
    }
}

function chest_4() {
    if (document.getElementById('chest_container').style.display == 'none') {
        document.getElementById('chest_container').style.display = 'inline-block';
    }

    if (document.getElementById('chest_4').style.display == 'none') {
        document.getElementById('chest_4').style.display = 'block';
        document.getElementById('chest_4').style.opacity = '1';
    } else {
        document.getElementById('chest_4').style.display = 'none';
        document.getElementById('chest_4').style.opacity = '0';
    }
}

function chest_5() {
    if (document.getElementById('chest_container').style.display == 'none') {
        document.getElementById('chest_container').style.display = 'inline-block';
    }

    if (document.getElementById('chest_5').style.display == 'none') {
        document.getElementById('chest_5').style.display = 'block';
        document.getElementById('chest_5').style.opacity = '1';
    } else {
        document.getElementById('chest_5').style.display = 'none';
        document.getElementById('chest_5').style.opacity = '0';
    }
}

function chest_6() {
    if (document.getElementById('chest_container').style.display == 'none') {
        document.getElementById('chest_container').style.display = 'inline-block';
    }

    if (document.getElementById('chest_6').style.display == 'none') {
        document.getElementById('chest_6').style.display = 'block';
        document.getElementById('chest_6').style.opacity = '1';
    } else {
        document.getElementById('chest_6').style.display = 'none';
        document.getElementById('chest_6').style.opacity = '0';
    }
}

function back_1() {
    if (document.getElementById('back_container').style.display == 'none') {
        document.getElementById('back_container').style.display = 'inline-block';
    }

    if (document.getElementById('back_1').style.display == 'none') {
        document.getElementById('back_1').style.display = 'block';
        document.getElementById('back_1').style.opacity = '1';
    } else {
        document.getElementById('back_1').style.display = 'none';
        document.getElementById('back_1').style.opacity = '0';
    }
}

function back_2() {
    if (document.getElementById('back_container').style.display == 'none') {
        document.getElementById('back_container').style.display = 'inline-block';
    }

    if (document.getElementById('back_2').style.display == 'none') {
        document.getElementById('back_2').style.display = 'block';
        document.getElementById('back_2').style.opacity = '1';
    } else {
        document.getElementById('back_2').style.display = 'none';
        document.getElementById('back_2').style.opacity = '0';
    }
}

function back_3() {
    if (document.getElementById('back_container').style.display == 'none') {
        document.getElementById('back_container').style.display = 'inline-block';
    }

    if (document.getElementById('back_3').style.display == 'none') {
        document.getElementById('back_3').style.display = 'block';
        document.getElementById('back_3').style.opacity = '1';
    } else {
        document.getElementById('back_3').style.display = 'none';
        document.getElementById('back_3').style.opacity = '0';
    }
}

function back_4() {
    if (document.getElementById('back_container').style.display == 'none') {
        document.getElementById('back_container').style.display = 'inline-block';
    }

    if (document.getElementById('back_4').style.display == 'none') {
        document.getElementById('back_4').style.display = 'block';
        document.getElementById('back_4').style.opacity = '1';
    } else {
        document.getElementById('back_4').style.display = 'none';
        document.getElementById('back_4').style.opacity = '0';
    }
}

function back_5() {
    if (document.getElementById('back_container').style.display == 'none') {
        document.getElementById('back_container').style.display = 'inline-block';
    }

    if (document.getElementById('back_5').style.display == 'none') {
        document.getElementById('back_5').style.display = 'block';
        document.getElementById('back_5').style.opacity = '1';
    } else {
        document.getElementById('back_5').style.display = 'none';
        document.getElementById('back_5').style.opacity = '0';
    }
}

function back_6() {
    if (document.getElementById('back_container').style.display == 'none') {
        document.getElementById('back_container').style.display = 'inline-block';
    }

    if (document.getElementById('back_6').style.display == 'none') {
        document.getElementById('back_6').style.display = 'block';
        document.getElementById('back_6').style.opacity = '1';
    } else {
        document.getElementById('back_6').style.display = 'none';
        document.getElementById('back_6').style.opacity = '0';
    }
}

function legs_1() {
    if (document.getElementById('legs_container').style.display == 'none') {
        document.getElementById('legs_container').style.display = 'inline-block';
    }

    if (document.getElementById('legs_1').style.display == 'none') {
        document.getElementById('legs_1').style.display = 'block';
        document.getElementById('legs_1').style.opacity = '1';
    } else {
        document.getElementById('legs_1').style.display = 'none';
        document.getElementById('legs_1').style.opacity = '0';
    }
}

function legs_2() {
    if (document.getElementById('legs_container').style.display == 'none') {
        document.getElementById('legs_container').style.display = 'inline-block';
    }

    if (document.getElementById('legs_2').style.display == 'none') {
        document.getElementById('legs_2').style.display = 'block';
        document.getElementById('legs_2').style.opacity = '1';
    } else {
        document.getElementById('legs_2').style.display = 'none';
        document.getElementById('legs_2').style.opacity = '0';
    }
}

function legs_3() {
    if (document.getElementById('legs_container').style.display == 'none') {
        document.getElementById('legs_container').style.display = 'inline-block';
    }

    if (document.getElementById('legs_3').style.display == 'none') {
        document.getElementById('legs_3').style.display = 'block';
        document.getElementById('legs_3').style.opacity = '1';
    } else {
        document.getElementById('legs_3').style.display = 'none';
        document.getElementById('legs_3').style.opacity = '0';
    }
}

function legs_4() {
    if (document.getElementById('legs_container').style.display == 'none') {
        document.getElementById('legs_container').style.display = 'inline-block';
    }

    if (document.getElementById('legs_4').style.display == 'none') {
        document.getElementById('legs_4').style.display = 'block';
        document.getElementById('legs_4').style.opacity = '1';
    } else {
        document.getElementById('legs_4').style.display = 'none';
        document.getElementById('legs_4').style.opacity = '0';
    }
}

function legs_5() {
    if (document.getElementById('legs_container').style.display == 'none') {
        document.getElementById('legs_container').style.display = 'inline-block';
    }

    if (document.getElementById('legs_5').style.display == 'none') {
        document.getElementById('legs_5').style.display = 'block';
        document.getElementById('legs_5').style.opacity = '1';
    } else {
        document.getElementById('legs_5').style.display = 'none';
        document.getElementById('legs_5').style.opacity = '0';
    }
}

function legs_6() {
    if (document.getElementById('legs_container').style.display == 'none') {
        document.getElementById('legs_container').style.display = 'inline-block';
    }

    if (document.getElementById('legs_6').style.display == 'none') {
        document.getElementById('legs_6').style.display = 'block';
        document.getElementById('legs_6').style.opacity = '1';
    } else {
        document.getElementById('legs_6').style.display = 'none';
        document.getElementById('legs_6').style.opacity = '0';
    }
}

function triceps_1() {
    if (document.getElementById('triceps_container').style.display == 'none') {
        document.getElementById('triceps_container').style.display = 'inline-block';
    }

    if (document.getElementById('triceps_1').style.display == 'none') {
        document.getElementById('triceps_1').style.display = 'block';
        document.getElementById('triceps_1').style.opacity = '1';
    } else {
        document.getElementById('triceps_1').style.display = 'none';
        document.getElementById('triceps_1').style.opacity = '0';
    }
}

function triceps_2() {
    if (document.getElementById('triceps_container').style.display == 'none') {
        document.getElementById('triceps_container').style.display = 'inline-block';
    }

    if (document.getElementById('triceps_2').style.display == 'none') {
        document.getElementById('triceps_2').style.display = 'block';
        document.getElementById('triceps_2').style.opacity = '1';
    } else {
        document.getElementById('triceps_2').style.display = 'none';
        document.getElementById('triceps_2').style.opacity = '0';
    }
}

function triceps_3() {
    if (document.getElementById('triceps_container').style.display == 'none') {
        document.getElementById('triceps_container').style.display = 'inline-block';
    }

    if (document.getElementById('triceps_3').style.display == 'none') {
        document.getElementById('triceps_3').style.display = 'block';
        document.getElementById('triceps_3').style.opacity = '1';
    } else {
        document.getElementById('triceps_3').style.display = 'none';
        document.getElementById('triceps_3').style.opacity = '0';
    }
}

function triceps_4() {
    if (document.getElementById('triceps_container').style.display == 'none') {
        document.getElementById('triceps_container').style.display = 'inline-block';
    }

    if (document.getElementById('triceps_4').style.display == 'none') {
        document.getElementById('triceps_4').style.display = 'block';
        document.getElementById('triceps_4').style.opacity = '1';
    } else {
        document.getElementById('triceps_4').style.display = 'none';
        document.getElementById('triceps_4').style.opacity = '0';
    }
}

function triceps_5() {
    if (document.getElementById('triceps_container').style.display == 'none') {
        document.getElementById('triceps_container').style.display = 'inline-block';
    }

    if (document.getElementById('triceps_5').style.display == 'none') {
        document.getElementById('triceps_5').style.display = 'block';
        document.getElementById('triceps_5').style.opacity = '1';
    } else {
        document.getElementById('triceps_5').style.display = 'none';
        document.getElementById('triceps_5').style.opacity = '0';
    }
}

function triceps_6() {
    if (document.getElementById('triceps_container').style.display == 'none') {
        document.getElementById('triceps_container').style.display = 'inline-block';
    }

    if (document.getElementById('triceps_6').style.display == 'none') {
        document.getElementById('triceps_6').style.display = 'block';
        document.getElementById('triceps_6').style.opacity = '1';
    } else {
        document.getElementById('triceps_6').style.display = 'none';
        document.getElementById('triceps_6').style.opacity = '0';
    }
}

function biceps_1() {
    if (document.getElementById('biceps_container').style.display == 'none') {
        document.getElementById('biceps_container').style.display = 'inline-block';
    }

    if (document.getElementById('biceps_1').style.display == 'none') {
        document.getElementById('biceps_1').style.display = 'block';
        document.getElementById('biceps_1').style.opacity = '1';
    } else {
        document.getElementById('biceps_1').style.display = 'none';
        document.getElementById('biceps_1').style.opacity = '0';
    }
}

function biceps_2() {
    if (document.getElementById('biceps_container').style.display == 'none') {
        document.getElementById('biceps_container').style.display = 'inline-block';
    }

    if (document.getElementById('biceps_2').style.display == 'none') {
        document.getElementById('biceps_2').style.display = 'block';
        document.getElementById('biceps_2').style.opacity = '1';
    } else {
        document.getElementById('biceps_2').style.display = 'none';
        document.getElementById('biceps_2').style.opacity = '0';
    }
}

function biceps_3() {
    if (document.getElementById('biceps_container').style.display == 'none') {
        document.getElementById('biceps_container').style.display = 'inline-block';
    }

    if (document.getElementById('biceps_3').style.display == 'none') {
        document.getElementById('biceps_3').style.display = 'block';
        document.getElementById('biceps_3').style.opacity = '1';
    } else {
        document.getElementById('biceps_3').style.display = 'none';
        document.getElementById('biceps_3').style.opacity = '0';
    }
}

function biceps_4() {
    if (document.getElementById('biceps_container').style.display == 'none') {
        document.getElementById('biceps_container').style.display = 'inline-block';
    }

    if (document.getElementById('biceps_4').style.display == 'none') {
        document.getElementById('biceps_4').style.display = 'block';
        document.getElementById('biceps_4').style.opacity = '1';
    } else {
        document.getElementById('biceps_4').style.display = 'none';
        document.getElementById('biceps_4').style.opacity = '0';
    }
}

function biceps_5() {
    if (document.getElementById('biceps_container').style.display == 'none') {
        document.getElementById('biceps_container').style.display = 'inline-block';
    }

    if (document.getElementById('biceps_5').style.display == 'none') {
        document.getElementById('biceps_5').style.display = 'block';
        document.getElementById('biceps_5').style.opacity = '1';
    } else {
        document.getElementById('biceps_5').style.display = 'none';
        document.getElementById('biceps_5').style.opacity = '0';
    }
}

function biceps_6() {
    if (document.getElementById('biceps_container').style.display == 'none') {
        document.getElementById('biceps_container').style.display = 'inline-block';
    }

    if (document.getElementById('biceps_6').style.display == 'none') {
        document.getElementById('biceps_6').style.display = 'block';
        document.getElementById('biceps_6').style.opacity = '1';
    } else {
        document.getElementById('biceps_6').style.display = 'none';
        document.getElementById('biceps_6').style.opacity = '0';
    }
}

function shoulders_1() {
    if (document.getElementById('shoulders_container').style.display == 'none') {
        document.getElementById('shoulders_container').style.display = 'inline-block';
    }

    if (document.getElementById('shoulders_1').style.display == 'none') {
        document.getElementById('shoulders_1').style.display = 'block';
        document.getElementById('shoulders_1').style.opacity = '1';
    } else {
        document.getElementById('shoulders_1').style.display = 'none';
        document.getElementById('shoulders_1').style.opacity = '0';
    }
}

function shoulders_2() {
    if (document.getElementById('shoulders_container').style.display == 'none') {
        document.getElementById('shoulders_container').style.display = 'inline-block';
    }

    if (document.getElementById('shoulders_2').style.display == 'none') {
        document.getElementById('shoulders_2').style.display = 'block';
        document.getElementById('shoulders_2').style.opacity = '1';
    } else {
        document.getElementById('shoulders_2').style.display = 'none';
        document.getElementById('shoulders_2').style.opacity = '0';
    }
}

function shoulders_3() {
    if (document.getElementById('shoulders_container').style.display == 'none') {
        document.getElementById('shoulders_container').style.display = 'inline-block';
    }

    if (document.getElementById('shoulders_3').style.display == 'none') {
        document.getElementById('shoulders_3').style.display = 'block';
        document.getElementById('shoulders_3').style.opacity = '1';
    } else {
        document.getElementById('shoulders_3').style.display = 'none';
        document.getElementById('shoulders_3').style.opacity = '0';
    }
}

function shoulders_4() {
    if (document.getElementById('shoulders_container').style.display == 'none') {
        document.getElementById('shoulders_container').style.display = 'inline-block';
    }

    if (document.getElementById('shoulders_4').style.display == 'none') {
        document.getElementById('shoulders_4').style.display = 'block';
        document.getElementById('shoulders_4').style.opacity = '1';
    } else {
        document.getElementById('shoulders_4').style.display = 'none';
        document.getElementById('shoulders_4').style.opacity = '0';
    }
}

function shoulders_5() {
    if (document.getElementById('shoulders_container').style.display == 'none') {
        document.getElementById('shoulders_container').style.display = 'inline-block';
    }

    if (document.getElementById('shoulders_5').style.display == 'none') {
        document.getElementById('shoulders_5').style.display = 'block';
        document.getElementById('shoulders_5').style.opacity = '1';
    } else {
        document.getElementById('shoulders_5').style.display = 'none';
        document.getElementById('shoulders_5').style.opacity = '0';
    }
}

function shoulders_6() {
    if (document.getElementById('shoulders_container').style.display == 'none') {
        document.getElementById('shoulders_container').style.display = 'inline-block';
    }

    if (document.getElementById('shoulders_6').style.display == 'none') {
        document.getElementById('shoulders_6').style.display = 'block';
        document.getElementById('shoulders_6').style.opacity = '1';
    } else {
        document.getElementById('shoulders_6').style.display = 'none';
        document.getElementById('shoulders_6').style.opacity = '0';
    }
}