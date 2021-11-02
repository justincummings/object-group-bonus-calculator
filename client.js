const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function giveMoneyToTheFilthyMasses (name) {
        if (i.reviewRating === 3){
      let compensation = i.annualSalary * 1.04;
      let bonus = compensation - i.annualSalary;
      let bonus3 = {
        name: i.name,
        bonusPercentage: 1.04,
        totalCompensation: compensation,
        totalBonus: bonus
      }
      return bonus3;
 
    } else if (i.reviewRating === 4) {
      let compensation = i.annualSalary * 1.06;
      let bonus = compensation - i.annualSalary;
      let bonus4 = {
        name: i.name,
        bonusPercentage: 1.06,
        totalCompensation: compensation,
        totalBonus: bonus
      }
      return bonus4;
    
    } else if (i.reviewRating === 5){
      let compensation = i.annualSalary * 1.01;
      let bonus = compensation - i.annualSalary;
      let bonus5 = {
        name: i.name,
        bonusPercentage: 1.10,
        totalCompensation: compensation,
        totalBonus: bonus
      }
      return bonus5;
    }
    else {
      let compensation = i.annualSalary * 1;
      let bonus = compensation - i.annualSalary;
      let bonus0 = {
        name: i.name,
        bonusPercentage: 1, 
        totalCompensation: compensation,
        totalBonus: bonus
      }
      return bonus0;
      
    }
    
    }for (let i of employees)
  }







console.log(giveMoneyToTheFilthyMasses('Atticus'));
console.log(giveMoneyToTheFilthyMasses('Scout'));
console.log(giveMoneyToTheFilthyMasses('Robert'));
