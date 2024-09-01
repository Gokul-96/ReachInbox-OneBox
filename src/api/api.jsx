const getAuthToken = () => localStorage.getItem('authToken');

export const fetchThreads = async () => {
  const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
    headers: {
      'Authorization': `Bearer ${getAuthToken()}`
    }
  });
  return await response.json();
};

export const deleteThread = async (threadId) => {
  await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${getAuthToken()}`
    }
  });
};

export const sendReply = async (threadId, replyData) => {
  await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${getAuthToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(replyData)
  });
};