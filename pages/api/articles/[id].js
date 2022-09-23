import { articles } from '../../../data';

export default function handler({ query: { id } }, res) {

    const filter = articles.filter(article => article.id === id)
    if (filter.length > 0) {
        res.status(200).json(filter[0]);
    }
    else {
        res.status(404).json({ message: `Article with the id of ${id} Not Found` })
    }
}
