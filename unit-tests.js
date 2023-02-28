const unittests = [
  {
    name: 'testone',
    params: {
      char: 'b'
    },
    expectedoutcomes: {
      response: 'b is a consonant'
    },
    realizedoutcomes: {
      response: '',
      pass: false
    }
  },
  {
    name: 'testtwo',
    params: {
      char: 'U'
    },
    expectedoutcomes: {
      response: 'U is a vowel'
    },
    realizedoutcomes: {
      response: '',
      pass: false
    }
  },
  {
    name: 'testthree',
    params: {
      char: '#'
    },
    expectedoutcomes: {
      response: '# is an invalid input'
    },
    realizedoutcomes: {
      response: '',
      pass: false
    }
  },
  {
    name: 'testfour',
    params: {
      char: '8'
    },
    expectedoutcomes: {
      response: '8 is an invalid input',
    },
    realizedoutcomes: {
      response: '',
      pass: false
    }
  }
];

$("#btn-unit-tests").click(function() {
  unittests.forEach(item => {
    // Arrange
    document.getElementById(`param-${item.name}-char`).innerText = document.getElementById('form-input').value = item.params.char;
    document.getElementById(`expected-outcome-${item.name}-response`).innerText = item.expectedoutcomes.response;

    // Act
    $('#calculate').click();

    // Assert
    document.getElementById(`realized-outcome-${item.name}-response`).innerText = item.realizedoutcomes.response = document.getElementById('form-response').innerText;
    item.realizedoutcomes.pass = (item.realizedoutcomes.response == item.expectedoutcomes.response) ? true : false;
    const cardTitle = document.getElementById(`${item.name}-title`);

    if (item.realizedoutcomes.pass) {
      cardTitle.parentNode.classList.add('bg-success');
      cardTitle.innerHTML = '<i class="fa-solid fa-circle-check text-success"></i> Test Passed';
    }
    else {
      cardTitle.parentNode.classList.add('bg-danger');
      cardTitle.innerHTML = '<i class="fa-solid fa-circle-xmark text-danger"></i> Test Failed';
    }
  });
});
