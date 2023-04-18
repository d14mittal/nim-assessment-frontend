import React from "react";

function ConfirmationPage({ match }) {
  const orderId = match.params.id;
  return (
    <div>
      <h1>Confirmation Page</h1>
      <p>Thank you for your order #{orderId}!</p>
    </div>
  );
}

export default ConfirmationPage;
