export const getUser = (req, res) => {
        try {
                res.send('GET User...');
        } catch (err) {
                throw new Error(err);
        }
};