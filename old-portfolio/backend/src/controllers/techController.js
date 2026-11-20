import { Technology } from '../config/db.js'

const getTech = async (req, res) => {
  try {
    const baseURL = `${req.protocol}://${req.get('host')}`
    const technologies = await Technology.findAll()

    const result = technologies.map(item => ({
      ...item.toJSON(),
      icon: item.icon ? `${baseURL}${item.icon}` : null
    }))

    res.json(result)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

const addTech = async (req, res) => {
  try {
    const icon = req.file ? `/uploads/icons/${req.file.filename}` : req.body.icon

    const technology = await Technology.create({
      name: req.body.name,
      icon
    })

    res.status(201).json(technology)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

const deleteTech = async (req, res) => {
  try {
    const technology = await Technology.findByPk(req.params.id)

    if (!technology) {
      return res.status(404).json({ msg: 'Technology not found' })
    }

    await technology.destroy()
    res.status(200).json({ msg: 'Successfully deleted Technology', data: technology })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export { getTech, addTech, deleteTech }
