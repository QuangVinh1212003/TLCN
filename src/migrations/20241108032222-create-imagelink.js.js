'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ImageLink', {
      imageID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      link: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      imageType: {
        type: Sequelize.STRING(50),  // Thêm cột imageType
        allowNull: true            // Có thể đặt là false nếu muốn đảm bảo mỗi ảnh đều có loại
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ImageLink');
  },
};
