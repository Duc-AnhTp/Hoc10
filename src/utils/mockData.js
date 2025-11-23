export const mockBooks = {
    textbooks: [
        {
            id: 1,
            title: "Tiếng Việt 1 - Tập 1",
            image: "https://via.placeholder.com/180x240/FF6B6B/ffffff?text=Tieng+Viet+1",
            badge: "Tập 1",
            actionButton: "Xem ngay",
            action: "view",
            category: "textbook",
            grade: 1,
        },
        {
            id: 2,
            title: "Tiếng Việt 1 - Tập 2",
            image: "https://via.placeholder.com/180x240/20C997/ffffff?text=Tieng+Viet+1T2",
            badge: "Tập 2",
            actionButton: "Xem ngay",
            action: "view",
            category: "textbook",
            grade: 1,
        },
        {
            id: 3,
            title: "Toán 1 - Tập 1",
            image: "https://via.placeholder.com/180x240/4ECDC4/ffffff?text=Toan+1",
            badge: "Tập 1",
            actionButton: "Xem ngay",
            action: "view",
            category: "textbook",
            grade: 1,
        },
        {
            id: 4,
            title: "Toán 1 - Tập 2",
            image: "https://via.placeholder.com/180x240/44AF69/ffffff?text=Toan+1T2",
            badge: "Tập 2",
            actionButton: "Xem ngay",
            action: "view",
            category: "textbook",
            grade: 1,
        },
    ],
    workbooks: [
        {
            id: 5,
            title: "Vở bài tập Tiếng Việt 1 - Tập 1",
            image: "https://via.placeholder.com/180x240/F38181/ffffff?text=Vo+BT+TV+1",
            badge: "Tập 1",
            actionButton: "Xem ngay",
            action: "view",
            category: "workbook",
            grade: 1,
        },
        {
            id: 6,
            title: "Vở bài tập Tiếng Việt 1 - Tập 2",
            image: "https://via.placeholder.com/180x240/AA96DA/ffffff?text=Vo+BT+TV+T2",
            badge: "Tập 2",
            actionButton: "Xem ngay",
            action: "view",
            category: "workbook",
            grade: 1,
        },
        {
            id: 7,
            title: "Vở bài tập Toán 1 - Tập 1",
            image: "https://via.placeholder.com/180x240/FCBAD3/ffffff?text=Vo+BT+Toan+1",
            badge: "Tập 1",
            actionButton: "Xem ngay",
            action: "view",
            category: "workbook",
            grade: 1,
        },
        {
            id: 8,
            title: "Vở bài tập Toán 1 - Tập 2",
            image: "https://via.placeholder.com/180x240/A8E6CF/ffffff?text=Vo+BT+Toan+T2",
            badge: "Tập 2",
            actionButton: "Xem ngay",
            action: "view",
            category: "workbook",
            grade: 1,
        },
    ],
    teacherBooks: [
        {
            id: 9,
            title: "Sách giáo viên Tiếng Việt 1 - Tập 1",
            image: "https://via.placeholder.com/180x240/FFD93D/ffffff?text=Sach+GV+TV",
            badge: "Tập 1",
            actionButton: "Đọc thử",
            action: "preview",
            buttonType: "secondary",
            category: "teacher",
            grade: 1,
        },
        {
            id: 10,
            title: "Sách giáo viên Toán 1 - Tập 1",
            image: "https://via.placeholder.com/180x240/FFE66D/ffffff?text=Sach+GV+Toan",
            badge: "Tập 1",
            actionButton: "Đọc thử",
            action: "preview",
            buttonType: "secondary",
            category: "teacher",
            grade: 1,
        },
    ],
    illustrations: [
        {
            id: 11,
            title: "Tiếng Việt 1 - Triết dạy minh họa",
            image: "https://via.placeholder.com/180x240/6B5B95/ffffff?text=Minh+Hoa+TV",
            category: "illustration",
            grade: 1,
        },
        {
            id: 12,
            title: "Toán 1 - Triết dạy minh họa",
            image: "https://via.placeholder.com/180x240/88498F/ffffff?text=Minh+Hoa+Toan",
            category: "illustration",
            grade: 1,
        },
    ],
    powerpoints: [
        {
            id: 13,
            title: "Tuần 1",
            subtitle: "Bài 1: a, c",
            image: "https://via.placeholder.com/200x150/27AE60/ffffff?text=Week+1",
            info: "Tuần 1 - Bài 🔒 1: a, c",
        },
        {
            id: 14,
            title: "Tuần 1",
            subtitle: "Bài 2: cô, có",
            image: "https://via.placeholder.com/200x150/2ECC71/ffffff?text=Week+1B2",
            info: "Tuần 1 - Bài 🔒 2: cô, có",
        },
        {
            id: 15,
            title: "Tuần 1",
            subtitle: "Bài 3: Kế chuyện",
            image: "https://via.placeholder.com/200x150/1ABC9C/ffffff?text=Week+1B3",
            info: "Tuần 1 - Bài 🔒 3: Kế chuyện",
        },
        {
            id: 16,
            title: "Tuần 2",
            subtitle: "Bài 4: Viết chữ hoa",
            image: "https://via.placeholder.com/200x150/16A085/ffffff?text=Week+2",
            info: "Tuần 2 - Bài 🔒 4: Viết chữ hoa",
        },
        {
            id: 17,
            title: "Tuần 2",
            subtitle: "Bài 5: o, ô",
            image: "https://via.placeholder.com/200x150/27AE60/ffffff?text=Week+2B5",
            info: "Tuần 2 - Bài 🔒 5: o, ô",
        },
        {
            id: 18,
            title: "Tuần 2",
            subtitle: "Bài 6: Kế chuyện tiếp",
            image: "https://via.placeholder.com/200x150/229954/ffffff?text=Week+2B6",
            info: "Tuần 2 - Bài 🔒 6: Kế chuyện tiếp",
        },
    ],
}

export function getBooksByGrade(grade) {
    const gradeNum = Number.parseInt(grade)
    return {
        textbooks: mockBooks.textbooks.filter((b) => b.grade === gradeNum),
        workbooks: mockBooks.workbooks.filter((b) => b.grade === gradeNum),
        teacherBooks: mockBooks.teacherBooks.filter((b) => b.grade === gradeNum),
        illustrations: mockBooks.illustrations.filter((b) => b.grade === gradeNum),
        powerpoints: mockBooks.powerpoints,
    }
}

export function getBooksByCategory(categories) {
    const categoryMap = {
        textbook: mockBooks.textbooks,
        workbook: mockBooks.workbooks,
        teacher: mockBooks.teacherBooks,
        illustration: mockBooks.illustrations,
    }
    return categories.reduce((acc, cat) => {
        return [...acc, ...(categoryMap[cat] || [])]
    }, [])
}
