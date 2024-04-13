const today = new Date();

const formatDate = () => {
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 0-11で表されるため、+1する
  const day = today.getDate();

  console.log(year + '年' + month + '月' + day + '日');
};

formatDate();
