function sum() {
  const [_nodePath, _filePath, ...inputs] = process.argv;

  let total = 0;
  for (let i = 0; i < inputs.length; i++) {
    const currentInput = parseInt(inputs[i]);

    if (typeof currentInput !== 'number') {
      throw new Error('Input parameters are invalid: numbers should be given');
    }

    total += currentInput;
  }
}

sum();
