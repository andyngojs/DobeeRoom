export function getSavedLists(req, res) {
    try {
        res.status(200).json({ message: 'Successfully' })
    } catch (e) {
        res.status(500).json({ message: 'Failure' })
    }
}