import { Education } from '../config/db.js'

const getEducation = async (req, res) => {
  try {
    const baseURL = `${req.protocol}://${req.get('host')}`
    const educations = await Education.findAll()

    const result = educations.map(item => ({
      ...item.toJSON(),
      logo: item.logo ? `${baseURL}${item.logo}` : null
    }))

    res.json(result)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

const addEducation = async (req, res) => {
  try {
    const { name, period } = req.body
    const logo = req.file ? `/uploads/logos/${req.file.filename}` : null

    const education = await Education.create({
      name,
      period,
      logo
    })

    res.status(201).json(education)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

const deleteEducation = async (req, res) => {
  try {
    const { id } = req.params
    const education = await Education.findByPk(id)

    if (!education) {
      return res.status(404).json({ msg: 'Education not found' })
    }

    await education.destroy()
    res.status(200).json({ msg: 'Successfully deleted Education', data: education })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export { getEducation, addEducation, deleteEducation }
