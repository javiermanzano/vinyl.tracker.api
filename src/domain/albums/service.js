module.exports = ({ db }) => {
  const create = ({ album }) => new Promise((resolve, reject) => {
    db.Album
      .create(album)
      .then((createdAlbum) => {
        resolve({
          album: createdAlbum,
        });
      })
      .catch((err) => {
        console.log(`Error while creating album: ${err}`);
        reject({
          message: err,
        });
      });
  });

  const find = () => new Promise((resolve, reject) => {
    const query = {};
    return db.Album.findAll(query)
      .then(albums => resolve({ data: albums }))
      .catch((err) => {
        reject(
          new Error({
            code: 'albums.find',
            message: `Error while finding albums ${err}`,
          }),
        );
      });
  });

  return {
    create,
    find,
  };
};
