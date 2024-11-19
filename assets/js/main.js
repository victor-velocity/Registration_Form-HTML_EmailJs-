
  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());
  data.maritalstatus = formData.get("maritalstatus");
  