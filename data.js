export const filterData = (data, requirement) => {
  const filtroDaFuncao = data.filter(champion => champion.tags.includes(requirement));
  if (requirement==="") {
    return data;
  }
  else
  return filtroDaFuncao;
};

export const sortData = (data) => data.sort((champ1, champ2) => {
  if (champ1.name > champ2.name) {
    return -1;
  } else if (champ1.name < champ2.name) {
    return 1;
  }
})

export const difficultyFilter = (data,difficulty) => {
  if (difficulty===""){
    return data;
  }
  else if (difficulty=== "baixo"){
    return data.filter(item => item.info.difficulty<=4);
  }
  else if (difficulty==="medio"){
    return data.filter(item=> item.info.difficulty>=5 && item.info.difficulty<= 7);
  }
  else if (difficulty==="alto"){
    return data.filter(item=> item.info.difficulty>=8);
  }
}
export const computerStats = (tamResult, tamTotal) => {
   let calculo = ((tamResult / tamTotal) * 100)
   return Math.round(calculo) 
  }


