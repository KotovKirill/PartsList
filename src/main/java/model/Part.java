package model;

import javax.persistence.*;

@Entity
@Table(name="parts")
public class Part {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="need")
    private Integer isNeed;

    @Column(name="count")
    private Integer count;

    public Part() {}

    public Part(String name, Integer isNeed, int count) {
        this.name = name;
        this.isNeed = isNeed;
        this.count = count;
    }

    public Part(Long id, String name, Integer isNeed, int count) {
        this.id = id;
        this.name = name;
        this.isNeed = isNeed;
        this.count = count;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer isNeed() {
        return isNeed;
    }

    public void setNeed(Integer need) {
        isNeed = need;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    @Override
    public String toString() {
        return "Part{" +
                "name='" + name + '\'' +
                ", isNeed=" + isNeed +
                ", count=" + count +
                '}';
    }
}
