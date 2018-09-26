function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);
    $('.custom-select').on('keypress', function () {
        $('.button').prop("disabled", false);
    });

    $('#submit').on('click', function () {
        let productName = $(".custom-select").val();
        let price = $('#price').val();
        let quantity = $('#quantity').val();

        $('.display').append($('<li>').text(`Product: ${productName} Price: ${price} Quantity: ${quantity}`));

        let sumEle = $("#sum");
        let currentSum = Number(sumEle.val());
        let newSum = currentSum + Number(price);
        $('#sum').val(newSum);

        let capacityEl = $('#capacity');
        let currentCapacity = Number(capacityEl.val());
        let newCapacity = currentCapacity + Number(quantity);
        if(newCapacity < 150){
            $('#capacity').val(newCapacity);
        } else {
            $('#capacity').addClass('fullCapacity');
            $('#capacity').val('full');
            $(".custom-select").attr("disabled", true);
            $('#price').attr("disabled", true);
            $('#quantity').attr("disabled", true);
        }


        $(".custom-select").val('');
        $('.button').prop("disabled", true);
        $('#price').val(1);
        $('#quantity').val(1);
    });

}
