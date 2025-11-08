export default function sortBySalary(args) {
  const sortingUsers = [...args].sort(function (user1, user2) {
    return user1.salary - user2.salary || user1.id - user2.id;
  });
  return sortingUsers;
}
