import React, { useState, useEffect } from "react";

function ConfirmationPage({ match }) {
  const [order, setOrder] = useState(null);
  const orderId = match.params.id;

  useEffect(() => {
    fetch(`/api/orders/${orderId}`)
      .then((response) => response.json())
      .then((data) => setOrder(data));
  }, [orderId]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Confirmation Page</h1>
      <p>Thank you for your order #{orderId}!</p>
      <p>Order details:</p>
      <ul>
        <li>Order ID: {order.id}</li>
        <li>Order Date: {order.date}</li>
        <li>Order Total: {order.total}</li>
      </ul>
    </div>
  );
}

export default ConfirmationPage;
