import React, { useState } from 'react';

const ReplyForm = ({ threadId }) => {
  const [reply, setReply] = useState({
    toName: '',
    to: '',
    from: '',
    fromName: '',
    subject: '',
    body: ''
  });

  const handleChange = (e) => {
    setReply({ ...reply, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reply)
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="toName"
        value={reply.toName}
        onChange={handleChange}
        placeholder="To Name"
      />
      <input
        type="email"
        name="to"
        value={reply.to}
        onChange={handleChange}
        placeholder="To Email"
      />
      <input
        type="text"
        name="fromName"
        value={reply.fromName}
        onChange={handleChange}
        placeholder="From Name"
      />
      <input
        type="email"
        name="from"
        value={reply.from}
        onChange={handleChange}
        placeholder="From Email"
      />
      <input
        type="text"
        name="subject"
        value={reply.subject}
        onChange={handleChange}
        placeholder="Subject"
      />
      <textarea
        name="body"
        value={reply.body}
        onChange={handleChange}
        placeholder="Body"
      />
      <button type="submit">Send Reply</button>
    </form>
  );
};

export default ReplyForm;