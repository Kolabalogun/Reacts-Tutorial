import React from "react";

const Indexx = () => {
  const [messages, messagesF] = React.useState(["a", "b"]);

  return (
    <div>
      {messages.length === 0 ? (
        <h1>You're all caught up!</h1>
      ) : (
        <h1>
          You have {messages.length} unread{" "}
          {messages.length > 1 ? "messages" : "message"}!
        </h1>
      )}
      
    </div>
  );
};

export default Indexx;
