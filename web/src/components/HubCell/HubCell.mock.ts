// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  hub: {
    id: 42,
    amenities: {},
    location: {},
    images: {},
    ownerId: 'test-owner',
    name: 'test name',
    reviews: [{ comments: 'test comment' }],
  },
})
