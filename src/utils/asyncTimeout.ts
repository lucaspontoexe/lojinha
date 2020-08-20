export default async function asyncTimeout(time: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }