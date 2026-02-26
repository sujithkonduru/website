const { pool } = require('../config/database');
const programsData = require('../../../src/data/programsData.json');

const seedPrograms = async () => {
  try {
    console.log('🌱 Seeding programs data...');

    for (const program of programsData.programs) {
      await pool.query(
        `INSERT INTO programs (id, title, type, date, location, description, duration, status, registration_link, tags)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
         title = VALUES(title),
         type = VALUES(type),
         date = VALUES(date),
         location = VALUES(location),
         description = VALUES(description),
         duration = VALUES(duration),
         status = VALUES(status),
         registration_link = VALUES(registration_link),
         tags = VALUES(tags)`,
        [
          program.id,
          program.title,
          program.type,
          program.date,
          program.location,
          program.description,
          program.duration,
          program.status,
          program.registrationLink,
          JSON.stringify(program.tags)
        ]
      );
    }

    console.log(`✅ Successfully seeded ${programsData.programs.length} programs`);
  } catch (error) {
    console.error('❌ Error seeding programs:', error.message);
    throw error;
  }
};

// Run if called directly
if (require.main === module) {
  seedPrograms()
    .then(() => {
      console.log('✅ Seeding completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Seeding failed:', error);
      process.exit(1);
    });
}

module.exports = seedPrograms;
