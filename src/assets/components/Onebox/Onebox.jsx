import React, { useEffect, useState } from 'react';
import ReplyForm from './ReplyForm';
import './Onebox.css';

const Onebox = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchThreads = async () => {
      const token = localStorage.getItem('authToken');
      const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setThreads(data);
    };

    fetchThreads();
  }, []);

  return (
    <div className="onebox">
      <h1>Onebox</h1>
      <ul>
        {threads.map(thread => (
          <li key={thread.id}>
            {thread.subject}
            <ReplyForm threadId={thread.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Onebox;