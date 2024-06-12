type Fields = {
  name: "";
  gamerTag: "";
  password?: "";
  favoriteGameId?: "";
};

export const validateFields = (fields: Fields) => {
  return new Promise<void>((resolve, reject) => {
    const isAllFieldsFilled = Object.values(fields).every(
      (value) => value.trim() !== ""
    );
    if (!isAllFieldsFilled) reject({ message: "Required fields not filled" });

    if (fields.gamerTag.length > 20)
      reject({ message: "GamerTag maximum 20 characters exceeded" });

    if (fields.name.length > 20)
      reject({ message: "Name maximum 20 characters exceeded" });

    resolve();
  });
};
