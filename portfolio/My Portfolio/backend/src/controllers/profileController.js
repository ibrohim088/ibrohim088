import { Profile } from '../config/db.js'

const getProfile = async (req, res) => {
  try {
    const lang = req.lang
    const profile = await Profile.findOne()

    if (!profile) return res.status(404).json({ msg: 'Profile not found' })

    const baseURL = `${req.protocol}://${req.get('host')}`

    const name = profile[`name_${lang}`] || profile.name_uz
    const role = profile[`role_${lang}`] || profile.role_uz

    res.status(200).json({
      photo: profile.photo ? `${baseURL}/${profile.photo.replace(/^\/+/, '')}` : null,
      socials: {
        telegram: profile.social_telegram,
        linkedin: profile.social_linkedin,
        phone: profile.social_phone,
        github: profile.social_github,
      },
      name,
      role
    })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

const uploadProfile = async (req, res) => {
  try {
    const body = { ...req.body }

    // Parse JSON strings if sent as form-data
    let name = body.name
    let role = body.role
    let socials = body.socials

    if (typeof name === 'string') { try { name = JSON.parse(name) } catch { } }
    if (typeof role === 'string') { try { role = JSON.parse(role) } catch { } }
    if (typeof socials === 'string') { try { socials = JSON.parse(socials) } catch { } }

    const photo = req.file ? `/uploads/photo/${req.file.filename}` : null

    let profileData = await Profile.findOne()

    if (profileData) {
      // Update existing profile
      await profileData.update({
        ...(name && {
          name_uz: name.uz !== undefined ? name.uz : profileData.name_uz,
          name_ru: name.ru !== undefined ? name.ru : profileData.name_ru,
          name_en: name.en !== undefined ? name.en : profileData.name_en
        }),
        ...(role && {
          role_uz: role.uz !== undefined ? role.uz : profileData.role_uz,
          role_ru: role.ru !== undefined ? role.ru : profileData.role_ru,
          role_en: role.en !== undefined ? role.en : profileData.role_en
        }),
        ...(socials && {
          social_telegram: socials.telegram !== undefined ? socials.telegram : profileData.social_telegram,
          social_linkedin: socials.linkedin !== undefined ? socials.linkedin : profileData.social_linkedin,
          social_phone: socials.phone !== undefined ? socials.phone : profileData.social_phone,
          social_github: socials.github !== undefined ? socials.github : profileData.social_github
        }),
        ...(photo && { photo })
      })
    } else {
      // Create new profile
      profileData = await Profile.create({
        photo,
        name_uz: name?.uz || null,
        name_ru: name?.ru || null,
        name_en: name?.en || null,
        role_uz: role?.uz || null,
        role_ru: role?.ru || null,
        role_en: role?.en || null,
        social_telegram: socials?.telegram || null,
        social_linkedin: socials?.linkedin || null,
        social_phone: socials?.phone || null,
        social_github: socials?.github || null
      })
    }

    res.status(201).json(profileData)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export { getProfile, uploadProfile }
