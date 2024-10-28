//for shoping cart part//
//for cart popup
function toogleCartPopup(){
    const cartPopup=document.getElementById('cart-popup');
    cartPopup.classList.toggle('active');
}

//for close cart popup 
function closeCart(){
const cartPopup=document.getElementById('cart-popup');
cartPopup.classList.remove('active');
}
//for add to cart button 
function addToCart(itemName,itemPrice){
    const cartItems = document.getElementById('cart-items').getElementsByTagName('tbody')[0];
    const existingItem = Array.from(cartItems.getElementsByTagName('tr')).find(item=>item.cells[0].textContent ===itemName);
    if(existingItem){
        const itemCount = parseInt(existingItem.querySelector('.item-count').textContent) +1;
        existingItem.querySelector('.item-count').textContent = itemCount;
        const itemTotal = parseFloat(existingItem.querySelector('.item-total').textContent) + parseFloat(itemPrice);
        existingItem.querySelector('.item-total').textContent = itemTotal.toFixed(2);

    }
    else {
        const newRow = cartItems.insertRow();
        newRow.innerHTML =`
        <td>${itemName}</td>
        <td class='item-count'>1</td>
        <td class='item-price'>${itemPrice}</td>
        <td class='item-total'>${itemPrice}</td>
         `;
        
    }
    updateCartCountAndTotal();

}
//update cart count and total
function updateCartCountAndTotal(){
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.querySelectorAll('#cart-items tbody tr');
    let totalCount = 0;
    let total = 0;
    cartItems.forEach(item => {
        const itemCount = parseInt(item.querySelector('.item-count').textContent);
        const itemTotal = parseFloat(item.querySelector('.item-total').textContent);
        totalCount +=itemCount;
        total+= itemTotal;
    });
    cartCount.textContent = totalCount;
    cartTotal.textContent = total.toFixed(2);
    
}



  

// Order Now button click event with data transfer
function orderBtn() {
    const cartItems = document.querySelectorAll('#cart-items tbody tr');
    const orderDetails = Array.from(cartItems).map(item => ({
        name: item.cells[0].textContent,
        quantity: item.querySelector('.item-count').textContent,
        price: item.querySelector('.item-price').textContent,
        total: item.querySelector('.item-total').textContent
    }));
    const totalCost = document.getElementById('cart-total').textContent;

    // Store order data in localStorage
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    localStorage.setItem('totalCost', totalCost);

    // Redirect to order page
    window.location.href = "order5.html";
}

/* 
function generateBill()
{    
    const cartItems = document.querySelectorAll('#cart-items tbody tr');
    let billHTML = `
        <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; text-align: left;">
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>`;

    let total = 0;
    cartItems.forEach(item => {
        const itemName = item.cells[0].textContent;
        const itemQuantity = item.querySelector('.item-count').textContent;
        const itemTotalPrice = item.querySelector('.item-total').textContent;
        total += parseFloat(itemTotalPrice);

        billHTML += `
            <tr>
                <td>${itemName}</td>
                <td>${itemQuantity}</td>
                <td>${itemTotalPrice}</td>
            </tr>`;
    });

    billHTML += `
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="2"><strong>Total</strong></td>
                    <td><strong>${total.toFixed(2)}</strong></td>
                </tr>
            </tfoot>
        </table>
        <button onclick="printBill()" style="margin-top: 20px;">Print Bill</button>`;

    document.getElementById('bill-section').innerHTML = billHTML;
}

// Function to print the bill
function printBill() {
    const billContent = document.getElementById('bill-section').innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = billContent;
    window.print();
    document.body.innerHTML = originalContent;
};

// Add a section in your HTML for the bill display
// <div id="bill-section"></div>

// Example button to trigger bill generation
// <button onclick="generateBill()">Generate Bill</button>*/
