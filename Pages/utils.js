// utils.js

export const formatSalary = (value) => {
    if (typeof value !== 'string') {
      return '';
    }
  
    // Remove any extra spaces
    const trimmedValue = value.trim();
  
    // Check if the value is in the format "50000 to 500000" or "6000000"
    const salaryRangePattern = /^(\d+)\s+to\s+(\d+)$/;
    const singleSalaryPattern = /^(\d+)$/;
  
    if (salaryRangePattern.test(trimmedValue)) {
      const matches = trimmedValue.match(salaryRangePattern);
      const from = parseInt(matches[1]);
      const to = parseInt(matches[2]);
      return `${from} LPA - ${to} LPA`;
    } else if (singleSalaryPattern.test(trimmedValue)) {
      const salaryValue = parseFloat(trimmedValue);
      const crore = Math.floor(salaryValue / 10000000);
      const lakh = Math.floor((salaryValue - crore * 10000000) / 100000);
      const thousand = Math.floor((salaryValue - crore * 10000000 - lakh * 100000) / 1000);
  
      let formattedSalary = '';
      if (crore > 0) {
        formattedSalary += crore + ' Cr ';
      }
      if (lakh > 0) {
        formattedSalary += lakh + ' Lakh ';
      }
      if (thousand > 0) {
        formattedSalary += thousand + ' Thousand ';
      }
  
      return formattedSalary.trim();
    }
  
    // If the value doesn't match any known format, return the original value
    return trimmedValue;
  };
  