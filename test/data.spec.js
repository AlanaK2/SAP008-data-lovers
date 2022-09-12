import { computerStats, difficultyFilter, filterData, sortData} from '../src/data.js';

describe('filterData', () => {
  it('Deveria ser uma constante', () => {
    expect(typeof filterData).toBe('function');
  });


  it('Deveria retornar os campeões que contém a tag Suporte', () => {
    const dados = [
      {
        name: "Nami",
        tags: [
          "Support",
          "Mage"
        ]
      },
      {
        name: "Blitzcrank",
        tags: [
          "Tank",
          "Fighter"
        ]
      },
      {
        name: "Taric",
        tags: [
          "Support",
          "Fighter"
        ]
      }
    ];
    
    const resultado = [
      {
        name: "Nami",
        tags: [
          "Support",
          "Mage"
        ],
      },
      {
        name: "Taric",
        tags: [
          "Support",
          "Fighter"
        ]
      }
    ];
    expect(filterData(dados, "Support")).toStrictEqual(resultado);
  });
});

describe('sortData', () => {
  it('Deveria ser uma função', () => {
    expect(typeof sortData).toBe('function');
  });


  it('Deveria retornar os campeões em ordem decrescente', () => {
    const dados = [
      {
        name: "Nami",
        
      },
      {
        name: "Blitzcrank",
       
      },
      {
        name: "Taric",
        
      }
    ];
    
    const resultado = [
      {
        
        name: "Taric"
      },
      {
        name: "Nami",
        
      },
      {
        name: "Blitzcrank"
      }
    ];
    expect(sortData(dados, "za")).toStrictEqual(resultado)
  });
  it('Deveria retornar os campeões em ordem crescente', () => {
    const dados = [
      {
        name: "Nami",
        
      },
      {
        name: "Blitzcrank",
       
      },
      {
        name: "Taric",
        
      }
    ];
    
    const resultado = [
      {
        
        name: "Blitzcrank"
      },
      {
        name: "Nami",
        
      },
      {
        name: "Taric"
      }
    ];
    expect(sortData(dados, "az")).toStrictEqual(resultado)
  });
});
describe('difficultyFilter', () => {
  it('Deveria ser uma função', () => {
    expect(typeof difficultyFilter).toBe('function');
  });
  it('Deveria retornar os campeões com o nível de dificuldade baixo', () => {
    const dados = [
      {
        name: "Aatrox",
        info: {
          difficulty: 4 }
      },
      {
        name: "Ahri",
        info: {
          difficulty: 5
        }
       
      },
      {
        name: "Akali",
        info: {
          difficulty: 7
        }        
      }
      ];
    
    const resultado = [
      {
        name: "Aatrox",
        info: {
          difficulty: 4 }
        }
    ];
    expect(difficultyFilter(dados, "baixo")).toStrictEqual(resultado)
  });
it('Deveria retornar os campeões com o nível de dificuldade medio', () => {
  const dados = [
    {
      name: "Aatrox",
      info: {
        difficulty: 4 }
    },
    {
      name: "Ahri",
      info: {
        difficulty: 5
      }
     
    },
    {
      name: "Anivia",
      info: {
        difficulty: 10
      }        
    }
    ];
  
  const resultado = [
    {
      name: "Ahri",
      info: {
        difficulty: 5
      }
     
    }
  ];
  expect(difficultyFilter(dados, "medio")).toStrictEqual(resultado)
});
it('Deveria retornar os campeões com o nível de dificuldade alto', () => {
  const dados = [
    {
      name: "Aatrox",
      info: {
        difficulty: 4 }
    },
    {
      name: "Ahri",
      info: {
        difficulty: 5
      }
     
    },
    {
      name: "Anivia",
      info: {
        difficulty: 10
      }        
    }
    ];
  
  const resultado = [
    {
      name: "Anivia",
      info: {
        difficulty: 10
      }        
    }
  ];
  expect(difficultyFilter(dados, "alto")).toStrictEqual(resultado)
});
it('Deveria retornar todos campeões', () => {
  const dados = [
    {
      name: "Aatrox",
      info: {
        difficulty: 4 }
    },
    {
      name: "Ahri",
      info: {
        difficulty: 5
      }
     
    },
    {
      name: "Anivia",
      info: {
        difficulty: 10
      }        
    }
    ]
  
  expect(difficultyFilter(dados, "")).toStrictEqual(dados)
});
describe('computerStats', () => {
  it('Deveria ser uma função', () => {
    expect(typeof computerStats).toBe('function');
  });
})
  it('Deveria retornar o percentual correto baseado nos dados de entrada', () => {
    const tamTotal = 100
    const tamParcial= 50
    const resultado= 50
    expect(computerStats(tamParcial, tamTotal)).toBe(resultado)
  });
})

