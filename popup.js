document.getElementById('redirectBtn').addEventListener('click', function() {
    const repoUrl = document.getElementById('repoUrl').value.trim();
  
    if (!repoUrl) {
      alert('Please paste a GitHub repo URL');
      return;
    }
    
    // Example GitHub URL: "https://github.com/jtwray/grpc-chat/tree/main"
    const parts = repoUrl.split('/');
    
    // Basic validation: ensure the URL has enough parts
    if (parts.length < 7) {
      alert('Invalid GitHub repo URL. Make sure it includes the branch name.');
      return;
    }
    
    const username = parts[3];   // e.g., 'jtwray'
    const repoName = parts[4];   // e.g., 'grpc-chat'
    const branchName = parts[6]; // e.g., 'main'
    
    // Construct the new URL.
    const newUrl = `https://codesandbox.io/p/github/${username}/${repoName}/${branchName}`;
    
    // Open the new URL in a new tab.
    chrome.tabs.create({ url: newUrl });
  });
  