/**
 * Sprite Sheet Configuration
 * Contains all sprite coordinates from the source sprite sheet
 */

export interface SpriteData {
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

// Parsed from your provided coordinates
export const SPRITES: SpriteData[] = [
  {
    name: 'Title',
    x: 0,
    y: 0,
    width: 2100,
    height: 425
  },
  {
    name: 'BaseClouds',
    x: 2100,
    y: 0,
    width: 1525,
    height: 425
  },
  {
    name: 'RotatingWindMill',
    x: 0,
    y: 425,
    width: 470,
    height: 450
  },
  {
    name: 'RotatingWaterMill1',
    x: 831,
    y: 425,
    width: 699,
    height: 450
  },
  {
    name: 'RotatingWaterMill2',
    x: 1530,
    y: 425,
    width: 570,
    height: 450
  },
  {
    name: 'StaticWaterMill',
    x: 0,
    y: 875,
    width: 831,
    height: 949
  },
  {
    name: 'StaticWindMill',
    x: 831,
    y: 875,
    width: 699,
    height: 949
  },
  {
    name: 'titleCloud1',
    x: 0,
    y: 2050,
    width: 470,
    height: 739
  },
  {
    name: 'titleCloud2',
    x: 831,
    y: 2050,
    width: 1269,
    height: 739
  },
  {
    name: 'stars',
    x: 2100,
    y: 425,
    width: 1952,
    height: 970
  },
  {
    name: 'GeometricCircleGrid',
    x: 2100,
    y: 1395,
    width: 1952,
    height: 1394
  },
  {
    name: 'BabbageMachine',
    x: 831,
    y: 2050,
    width: 1269,
    height: 739
  },
  {
    name: 'HourGlassLeftPillar',
    x: 0,
    y: 2790,
    width: 470,
    height: 1366
  },
  {
    name: 'HourGlassRightPillar',
    x: 470,
    y: 2790,
    width: 361,
    height: 1366
  },
  {
    name: 'HourGlassBase',
    x: 2100,
    y: 2790,
    width: 1525,
    height: 710
  },
  {
    name: 'HourGlassTop',
    x: 2100,
    y: 3501,
    width: 1525,
    height: 655
  },
  {
    name: 'BGFutureBuild',
    x: 1530,
    y: 875,
    width: 570,
    height: 515
  },
  {
    name: 'BGFutureBuild2',
    x: 4052,
    y: 875,
    width: 1028,
    height: 520
  },
  {
    name: 'ForeGroundRoad',
    x: 4052,
    y: 0,
    width: 1028,
    height: 425
  },
  {
    name: 'Train',
    x: 4052,
    y: 1853,
    width: 1028,
    height: 71
  },
  {
    name: 'Bridge',
    x: 4052,
    y: 1924,
    width: 1028,
    height: 126
  },
  {
    name: 'purpleClouds1',
    x: 4052,
    y: 2050,
    width: 1028,
    height: 740
  },
  {
    name: 'purpleClouds2',
    x: 4052,
    y: 2790,
    width: 1028,
    height: 710
  },
  {
    name: 'purpleClouds3',
    x: 4052,
    y: 3500,
    width: 104,
    height: 1581
  },
  {
    name: 'peachClouds1',
    x: 4052,
    y: 425,
    width: 104,
    height: 450
  },
  {
    name: 'peachClouds2',
    x: 4052,
    y: 1395,
    width: 104,
    height: 429
  }
];

// Helper function to get sprite by name
export function getSpriteByName(name: string): SpriteData | undefined {
  return SPRITES.find(sprite => sprite.name === name);
}

// Sprite sheet dimensions (for reference)
export const SPRITE_SHEET_WIDTH = 5080;
export const SPRITE_SHEET_HEIGHT = 5081;