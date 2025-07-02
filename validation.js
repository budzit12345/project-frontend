export function validateTask(taskText) {
    const forbiddenWords = ['dupa', 'cholera', 'kurde', 'idiota'];
    const trimmed = taskText.trim().toLowerCase();
    if (trimmed === '') return false;
  
    return !forbiddenWords.some(word => trimmed.includes(word));
  }
  