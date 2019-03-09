$(document).ready(function () {
    $('#load-brand-list').click(function () {
        $.ajax({
            url: 'https://us-central1-api-beetrootacademy.cloudfunctions.net/brands/',
            dataType: 'json',
            method: 'GET',
            success: function (data) {
                console.log(data);
                showList(data.brands);
            },
            error: function (error) {
                alert(error);
            }
        });
    });

    function showList(list) {
        list.forEach(function(brand) {
            var brandItem = `<li data-brand-id="${brand.id}" class="brand-list-item">
<img src="${brand.imageUrls['80w-326ppi']}" alt="${brand.brandName}">
<span>${brand.brandName}</span>
</li>`;
            $('#brands-list').append(brandItem);


        });

        $('#brands-list').on('click', function (event) {
            if (event.target.tagName = 'li') {
                $('.modal')[0].style.display = 'block';
                $('.modal')[0].innerHTML = `<p>${list[$(event.target).index()].id}</p>
<img src="${list[$(event.target).index()].imageUrls['80w-326ppi']}" alt="">`;
            }
        });
    }
});

