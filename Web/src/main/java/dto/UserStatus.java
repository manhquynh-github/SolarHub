package dto;
// Generated May 22, 2019 4:10:30 PM by Hibernate Tools 4.3.1

import dto.common.IDTO;
import dto.common.IName;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * UserStatus generated by hbm2java
 */
@Entity
@Table(name = "user_status",
       catalog = "toymanager"
)
public class UserStatus implements Serializable, IDTO, IName {
    public static UserStatus ACTIVE = new UserStatus(1,
                                                     "Đang hoạt động");
    public static UserStatus INACTIVE = new UserStatus(2,
                                                       "Không hoạt động");
    private long id;
    private String name;
    private Set<User> users;

    public UserStatus() {
        this.users = new HashSet<>(0);
    }

    public UserStatus(long id,
                      String name) {
        this.users = new HashSet<>(0);
        this.id = id;
        this.name = name;
    }

    public UserStatus(long id,
                      String name,
                      Set<User> users) {
        this.users = new HashSet<>(0);
        this.id = id;
        this.name = name;
        this.users = users;
    }

    @Id
    @Column(name = "Id",
            unique = true,
            nullable = false)
    @Override
    public long getId() {
        return this.id;
    }

    @Override
    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "Name",
            nullable = false)
    @Override
    public String getName() {
        return this.name;
    }

    @Override
    public void setName(String name) {
        this.name = name;
    }

    @OneToMany(fetch = FetchType.LAZY,
               mappedBy = "userStatus")
    public Set<User> getUsers() {
        return this.users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }
}
