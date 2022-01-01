// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  data: {
    id: 42,
    name: 'test name',
    amenities: {},
    location: { name: 'test location' },
    ownerId: 'testId',
    images: {},
    reviews: [{ comments: 'test comment' }],
  },
})
