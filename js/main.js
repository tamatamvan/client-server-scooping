function henshinHeading() {
    var heading = $('#kamen-rider').data('heading')
    $('#kamen-rider').text(heading);
}

function henshinUrl() {
    var web = $('#hiddenurl').attr('url')
    $('#kamen-rider').text(web)
}

function randomMeals() {
    var meals = ['Mie Ayam', 'Martabak', 'Kwetiauw Special', 'Sphagetti', 'Nasi Goreng', 'Batagor', 'Sarden Kaleng', 'Indomie goreng Rendang', 'Sari Roti']
    var random = Math.round(Math.random() * meals.length)
    var pick = meals[random]

    $('#hiddenmeals').attr('rel', pick)
    var newMeals = $('#hiddenmeals').attr('rel')
    $('#kamen-rider').text(newMeals)
}
