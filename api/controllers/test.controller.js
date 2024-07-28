export const shouldBeLoggedIn = async (req, res) => {
  res.send("test router works logged in");
};

export const shouldBeAdmin = async (req, res) => {
  res.send("test router worksm Admin");
};
