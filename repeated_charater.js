var solution = s => {
    var newStringArray = s.split('');
    let couterObj = newStringArray.reduce((total, currentValue) => {
      total[currentValue] ? total[currentValue]++ : (total[currentValue] = 1);
      return total;
    }, {});
    console.log(couterObj);
    let arr = Object.values(couterObj);
    let max = Math.max(...arr);
    return Object.keys(couterObj).find(key => couterObj[key] === max);;
  };
  
  let str = 'aaAAA3333f';
  // Log to console
  console.log(solution(str));
  